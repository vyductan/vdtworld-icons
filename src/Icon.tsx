import { IconProps } from "./types";
import * as HeroIconsOulined from "@heroicons/react/outline";
import * as HeroIconsSoiled from "@heroicons/react/solid";

const libraryMap = {
  HeroIconsOulined,
  HeroIconsSoiled,
};
const Icon = ({ iconLib, iconName }: IconProps): JSX.Element => {
  const m = libraryMap as { [key: string]: any };
  return m[iconLib][iconName];
};
export default Icon;
