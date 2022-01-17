export const hasValidHavenOptions = (opts: any): boolean => {
  try {
    return (
      Array.isArray(opts.domains) &&
      opts.domains.length > 0 &&
      Array.isArray(opts.services) &&
      opts.services.length > 0 &&
      Object.prototype.hasOwnProperty.call(opts.services[0], 'name') &&
      opts.services[0].name.length > 0 &&
      Array.isArray(opts.services[0].purposes) &&
      opts.services[0].purposes.length > 0 &&
      Object.prototype.hasOwnProperty.call(opts.services[0], 'type') &&
      opts.services[0].type.length > 0 &&
      Object.prototype.hasOwnProperty.call(opts.services[0], 'options') &&
      Object.prototype.hasOwnProperty.call(opts.services[0].options, 'id')
    )
  } catch (error) {
    console.error(error)
    return false
  }
}
