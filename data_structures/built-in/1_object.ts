namespace Objects {
    interface Person {name: string, age: number, isStudent: boolean, "key-with-hyphen": string, girlfriend?: string, sayMyName?: () => void}
    const obj: Person = {name: 'Bruce', age: 20, isStudent: true, "key-with-hyphen": "value", sayMyName: function() {console.log(this.name)}}
    // Note: sayMyName method would not work for an anonymous function unless it is bound to the object

    console.log(obj.name)
    console.log(obj["age"]) // bracket notation is used when the key contains a space or a special character (e.g. hyphen)
    console.log(obj["key-with-hyphen"])

    // you can use dot notation or bracket notation to add a property or to update a property
    obj.girlfriend = 'Clark'
    obj["age"] = 21
    obj["key-with-hyphen"] = "new value"

    // delete a property
    delete obj.girlfriend

    // for (const key in obj) {
    //     console.log(`${key}: ${obj[key as keyof typeof obj]}`)
    // }

    obj.sayMyName?.()

    // Object.keys, Object.values, Object.entries - return an array of the keys, values, or key-value pairs of the object
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    const entries = Object.entries(obj)

    // Object.freeze - prevents the object from being modified
    Object.freeze(obj)
    obj.name = 'Clark'

    // Object.seal - prevents the object from being modified
    Object.seal(obj)
    obj.name = 'Clark'

    // Big O
    // Insert / update / delete - O(1)
    // Access - O(1)
    // Search - O(n)
    // Iteration - O(n)
    // Object.keys, Object.values, Object.entries - O(n)
    // Object.freeze, Object.seal - O(1)
}