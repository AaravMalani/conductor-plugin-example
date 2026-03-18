import { IChannel, IConduit, IPlugin } from "@sourceacademy/conductor/conduit";
import { CHANNEL_ID, WEB_PLUGIN_ID } from "./constants";
import { TestMessage } from "./types";
export default class WebPlugin implements IPlugin {
  static readonly channelAttach = [CHANNEL_ID];
  readonly id: string = WEB_PLUGIN_ID;

  private readonly __conduit: IConduit;
  private readonly __testChannel: IChannel<TestMessage>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(conduit: IConduit, [testChannel]: IChannel<any>[]) {
    this.__conduit = conduit;

    this.__testChannel = testChannel;
    this.__testChannel.subscribe(message => {
      console.log(`WebPlugin received message: ${message.content}`);
    });
  }
}
