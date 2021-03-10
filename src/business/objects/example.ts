export class Example {
  constructor(
    public exampleString: string,
    public exampleNumber: number,
    public exampleObject: ExampleObject
  ){}
}

export class ExampleObject {
  constructor(
    public name?: string
  ){}
}
