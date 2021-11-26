export namespace UserActions {
  const scope = '[User]';

  export class Create {
    static readonly type = `${scope} Create`;

    constructor(readonly name: number, readonly email: string) {}
  }
}
