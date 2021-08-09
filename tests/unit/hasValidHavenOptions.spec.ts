import { hasValidHavenOptions } from '../../src/plugins/CookieBar/helpers'

describe('#hasValidHavenOptions', () => {
  describe('valid options', () => {
    test('returns true with valid options', () => {
      const opts = {
        domains: ['.example.com'],
        services: [
          {
            name: 'google-tag-manager',
            purposes: ['analytics'],
            type: 'google-tag-manager',
            inject: true,
            options: {
              id: 'GTM-1234',
            },
          },
        ],
      }

      const result = hasValidHavenOptions(opts)

      expect(result).toBeTruthy()
    })
  })

  describe('invalid options', () => {
    describe('domain option', () => {
      test('returns false with missing domain', () => {
        const opts = {
          domains: [],
          services: [
            {
              name: 'google-tag-manager',
              purposes: ['analytics'],
              type: 'google-tag-manager',
              inject: true,
              options: {
                id: 'GTM-ABC1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with incorrect domain type', () => {
        const opts = {
          domains: '.example.com',
          services: [
            {
              name: 'google-tag-manager',
              purposes: ['analytics'],
              type: 'google-tag-manager',
              inject: true,
              options: {
                id: 'GTM-ABC1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with no domain', () => {
        const opts = {
          services: [
            {
              name: 'google-tag-manager',
              purposes: ['analytics'],
              type: 'google-tag-manager',
              inject: true,
              options: {
                id: 'GTM-ABC1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })
    })

    describe('services option', () => {
      test('returns false with no services array', () => {
        const opts = {
          domains: ['.example.com'],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with incorrect services type', () => {
        const opts = {
          domains: ['.example.com'],
          services: 'not-a-service',
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with empty services array', () => {
        const opts = {
          domains: ['.example.com'],
          services: [],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })
    })

    describe('services.name option', () => {
      test('returns false with no services.name', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              purposes: ['analytics'],
              type: 'google-tag-manager',
              inject: true,
              options: {
                id: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with empty services.name', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: '',
              purposes: ['analytics'],
              type: 'google-tag-manager',
              inject: true,
              options: {
                id: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with incorrect services.name type', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: 123,
              purposes: ['analytics'],
              type: 'google-tag-manager',
              inject: true,
              options: {
                id: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })
    })

    describe('services.purposes option', () => {
      test('returns false with no services.purposes', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: 'google-tag-manager',
              type: 'google-tag-manager',
              inject: true,
              options: {
                id: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with incorrect services.purposes type', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: 'google-tag-manager',
              purposes: {},
              type: 'google-tag-manager',
              inject: true,
              options: {
                id: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with empty services.purposes array', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: 'google-tag-manager',
              purposes: [],
              type: 'google-tag-manager',
              inject: true,
              options: {
                id: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })
    })

    describe('services.type option', () => {
      test('returns false with no services.type', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: 'google-tag-manager',
              purposes: ['analytics'],
              inject: true,
              options: {
                id: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with empty services.name', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: 'google-tag-manager',
              purposes: ['analytics'],
              type: '',
              inject: true,
              options: {
                id: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with incorrect services.name type', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: 'google-tag-manager',
              purposes: ['analytics'],
              type: 123,
              inject: true,
              options: {
                id: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })
    })

    describe('services.options option', () => {
      test('returns false with no services.options', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: 'google-tag-manager',
              purposes: ['analytics'],
              type: 'google-tag-manager',
              inject: true,
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })

      test('returns false with no services.options.id', () => {
        const opts = {
          domains: ['.example.com'],
          services: [
            {
              name: 'google-tag-manager',
              purposes: ['analytics'],
              type: 'google-tag-manager',
              inject: true,
              options: {
                blah: 'GTM-1234',
              },
            },
          ],
        }

        const result = hasValidHavenOptions(opts)

        expect(result).toBeFalsy()
      })
    })
  })
})
