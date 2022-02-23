export default function isServiceError(res, options) {
  if (res.status !== 200 && res.status !== 499) return true
  if (res.data.error) return true
  return false
}
