import getMission from '../store/mission'
import tagText from '../utils/tagText'
import replaceText from '../utils/replaceText'
import { fixWrap, replaceWrap, log } from '../utils/index'
import { transItem, ensureItem } from './item'

let missionMaps = null
let msPrms = null
const ensureMissionData = async () => {
  if (!msPrms) {
    msPrms = getMission()
  }
  await ensureItem()
  missionMaps = await msPrms
}

const replaceMission = (data, key) => {
  let transed = false
  if (!data || typeof data[key] !== 'string') return transed
  const { expMap, wordMaps, textMap } = missionMaps
  const text = fixWrap(data[key])
  let _text = text
  if (!text) return transed
  if (textMap.has(text)) {
    transed = true
    data[key] = tagText(textMap.get(text))
  } else {
    _text = replaceText(text, expMap, wordMaps)
    if (text !== _text) {
      transed = true
      data[key] = tagText(_text)
    } else if (DEV) {
      saveUnknownMissions(data, key)
    }
  }
  return transed
}

const processReward = (data, key) => {
  let transed = replaceMission(data, key)
  if (!transed) {
    transItem(data, key)
  }
}

const processMission = (list) => {
  list.forEach(item => {
    replaceMission(item.mission, 'title')
    replaceMission(item.mission, 'comment')
    if (item.mission.missionReward.content) {
      processReward(item.mission.missionReward.content, 'name')
      processReward(item.mission.missionReward.content, 'comment')
    }
  })
}

const processRaidMission = (list) => {
  list.forEach(item => {
    let mission = item.fesRaidAccumulatedReward
    replaceMission(mission, 'title')
    replaceMission(mission, 'comment')
    let content = mission.fesRaidAccumulatedRewardContent
    if (content && content.content) {
      processReward(content.content, 'name')
      processReward(content.content, 'comment')
    }
  })
}

const fullMission = (list, hasReward = true) => {
  list && list.forEach(item => {
    let mission = item.mission || item
    replaceMission(mission, 'title')
    replaceMission(mission, 'comment')
    replaceMission(mission, 'afterAchievedComment')
    replaceMission(mission, 'beforeAchievedComment')
    if (hasReward) {
      let reward = mission.lectureMissionReward
      if (reward && reward.content) {
        processReward(reward.content, 'name')
        processReward(reward.content, 'comment')
      }
    }
  })
}

const unknownMissions = []
const saveUnknownMissions = (data, key) => {
  if (!data[key]) return
  const text = replaceWrap(data[key])
  if (!unknownMissions.includes(text)) {
    unknownMissions.push(text)
  }
}

let win = window.unsafeWindow || window
win.printUnknownMission = () => log(unknownMissions.join('\n'))

const transMission = async (data) => {
  await ensureMissionData()
  processMission(data.dailyUserMissions)
  processMission(data.weeklyUserMissions)
  data.eventUserMissions.forEach(item => {
    if (item && item.userMissions) {
      processMission(item.userMissions)
    }
  })
  processMission(data.normalUserMissions)
  processMission(data.specialUserMissions)
}

const reportMission = async (data) => {
  await ensureMissionData()
  processMission(data.reportUserMissions)
}

const beginnerMissionComplete = async (data) => {
  await ensureMissionData()
  let mission = data.beginnerMission
  if (mission) {
    if (mission.clearedLectureMission) {
      fullMission([mission.clearedLectureMission])
    }
    if (mission.progressLectureMission) {
      fullMission([mission.progressLectureMission])
    }
  }
}

const accumulatedPresent = (item, key) => {
  if (item && item[key]) {
    item[key] = tagText(item[key].replace(/イベントミッションを(\d+)個達成しよう/, '이벤트 미션을 $1개 달성하자'))
  }
}

const fesRecomMission = async (data) => {
  await ensureMissionData()
  replaceMission(data.userRecommendedMission.mission, 'comment')
  replaceMission(data.userRecommendedMission.mission, 'title')
  data.accumulatedPresent.userGameEventAccumulatedPresents.forEach(item => {
    replaceMission(item.gameEventAccumulatedPresent, 'comment')
    replaceMission(item.gameEventAccumulatedPresent, 'title')
  })
}

const fesRaidMission = async (data) => {
  await ensureMissionData()
  processRaidMission(data.fesRaidBestScoreRewards)
  processRaidMission(data.fesRaidLapRewards)
  processRaidMission(data.fesRaidPointRewards)
}

const teachingMission = async (data) => {
  await ensureMissionData()
  data.teachingHints && data.teachingHints.forEach(item => {
    item.userProduceTeachingHints.forEach(hint => {
      replaceMission(hint.produceTeachingHint, 'title')
    })
  })
}

const beginnerMission = async (data) => {
  await ensureMissionData()
  fullMission(data.lectureMissions)
}

const idolRoadRewards = (idol) => {
  idol.userIdolRoad && idol.userIdolRoad.idolRoad.idolRoadRewards.forEach(reward => {
    processReward(reward.content, 'name')
    processReward(reward.content, 'comment')
  })
}

const idolRoadMission = async (data) => {
  await ensureMissionData()
  fullMission(data.userMissions, false)
  data.userIdols && data.userIdols.forEach(idolRoadRewards)
}

const idolRoadForward = async (data) => {
  await ensureMissionData()
  idolRoadRewards(data.userIdol)
}

export { reportMission, fesRecomMission, fesRaidMission, idolRoadMission, idolRoadForward,
  teachingMission, beginnerMission, beginnerMissionComplete }
export default transMission
