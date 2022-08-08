export class KeysEvents {
  static FilterKey(keyEvent: KeyboardEvent, keyCode: string) {
    return keyEvent.code === keyCode
  }
}
