asyncData(context) {
  const deviceType = context.$ua.deviceType()
  return { deviceType }
}