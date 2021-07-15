import { IconProps } from "./types";
import HeroIconsOulined from "@heroicons/react/outline";
import HeroIconsSoiled from "@heroicons/react/solid";

const libMap = {
  HeroIconsOulined,
  HeroIconsSoiled,
};
const Icon = ({ iconLib, iconName }: IconProps): JSX.Element => {
  return libMap[iconLib][iconName];
};
export default Icon;
