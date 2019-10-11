import data from './data'

class MockApi {

  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        return resolve(data)
      }, 0)
    })
  }
}

export { MockApi }
