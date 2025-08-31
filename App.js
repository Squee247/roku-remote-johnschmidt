import { HomeBackRow } from "./components/HomeBackRow";
import { DPad } from "./components/DPad";
import { OptionPlayRow } from "./components/PlayBack";
import { VolumeControl } from "./components/Volume";


export default function App() {
  return (
    <>
      <HomeBackRow />
      <DPad />
      <OptionPlayRow />
      <VolumeControl />
    </>
  );
}