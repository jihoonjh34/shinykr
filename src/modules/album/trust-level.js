import { autoTransText } from '../type-text'

const albumTrustLevel = async (data) => {
  if (data.voices) {
    const list = []
    data.voices.forEach(item => {
      if (item.characterTrustLevelComment) {
        list.push(item.characterTrustLevelComment)
      }
    })
    await autoTransText(list)
  }
}

export default albumTrustLevel