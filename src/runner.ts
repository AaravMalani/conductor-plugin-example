import { IChannel, IConduit, IPlugin } from "@sourceacademy/conductor/conduit";
import { CHANNEL_ID, RUNNER_PLUGIN_ID } from "./constants";
import { TestMessage } from "./types";
export default class RunnerPlugin implements IPlugin {
  static readonly channelAttach = [CHANNEL_ID];
  readonly id: string = RUNNER_PLUGIN_ID;

  private readonly __conduit: IConduit;
  private readonly __testChannel: IChannel<TestMessage>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(conduit: IConduit, [testChannel]: IChannel<any>[]) {
    this.__conduit = conduit;
    this.__testChannel = testChannel;
    this.__testChannel.send(new TestMessage("Hello from RunnerPlugin!"));
  }
}
