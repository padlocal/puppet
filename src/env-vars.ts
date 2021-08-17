const DEFAULT_LRU_CACHE_SIZE_CONTACT         = 3000
const DEFAULT_LRU_CACHE_SIZE_FRIENDSHIP      = 100
const DEFAULT_LRU_CACHE_SIZE_MESSAGE         = 500
const DEFAULT_LRU_CACHE_SIZE_ROOM            = 500
const DEFAULT_LRU_CACHE_SIZE_ROOM_INVITATION = 100
const DEFAULT_LRU_CACHE_SIZE_ROOM_MEMBER     = 30000

const getEnvNumber = (varName: string, defaultValue: number) => {
  const strVal = process.env[varName]
  if (!strVal) {
    return defaultValue
  }

  const numVal = parseInt(strVal)
  if (isNaN(numVal)) {
    return defaultValue
  }

  return numVal
}

const WECHATY_PUPPET_LRU_CACHE_SIZE_CONTACT = (v?: number) => v ?? getEnvNumber(
  'WECHATY_PUPPET_LRU_CACHE_SIZE_CONTACT',
  DEFAULT_LRU_CACHE_SIZE_CONTACT,
)

const WECHATY_PUPPET_LRU_CACHE_SIZE_FRIENDSHIP = (v?: number) => v ?? getEnvNumber(
  'WECHATY_PUPPET_LRU_CACHE_SIZE_FRIENDSHIP',
  DEFAULT_LRU_CACHE_SIZE_FRIENDSHIP,
)
const WECHATY_PUPPET_LRU_CACHE_SIZE_MESSAGE = (v?: number) => v ?? getEnvNumber(
  'WECHATY_PUPPET_LRU_CACHE_SIZE_MESSAGE',
  DEFAULT_LRU_CACHE_SIZE_MESSAGE,
)
const WECHATY_PUPPET_LRU_CACHE_SIZE_ROOM = (v?: number) => v ?? getEnvNumber(
  'WECHATY_PUPPET_LRU_CACHE_SIZE_ROOM',
  DEFAULT_LRU_CACHE_SIZE_ROOM,
)
const WECHATY_PUPPET_LRU_CACHE_SIZE_ROOM_INVITATION = (v?: number) => v ?? getEnvNumber(
  'WECHATY_PUPPET_LRU_CACHE_SIZE_ROOM_INVITATION',
  DEFAULT_LRU_CACHE_SIZE_ROOM_INVITATION,
)
const WECHATY_PUPPET_LRU_CACHE_SIZE_ROOM_MEMBER = (v?: number) => v ?? getEnvNumber(
  'WECHATY_PUPPET_LRU_CACHE_SIZE_ROOM_MEMBER',
  DEFAULT_LRU_CACHE_SIZE_ROOM_MEMBER,
)

export {
  WECHATY_PUPPET_LRU_CACHE_SIZE_CONTACT,
  WECHATY_PUPPET_LRU_CACHE_SIZE_FRIENDSHIP,
  WECHATY_PUPPET_LRU_CACHE_SIZE_MESSAGE,
  WECHATY_PUPPET_LRU_CACHE_SIZE_ROOM_INVITATION,
  WECHATY_PUPPET_LRU_CACHE_SIZE_ROOM_MEMBER,
  WECHATY_PUPPET_LRU_CACHE_SIZE_ROOM,
}
