import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, (draft) => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, (draft) => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(
      draft[currentProp],
      value,
      ...remainingProps
    );
  });
};

export const capitalized = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);
export const lowerCase = (word) => word.charAt(0).toLowerCase() + word.slice(1);

export const device = () => {
  const currentDevice = wp.data.select("core/edit-post").__experimentalGetPreviewDeviceType();
  return lowerCase(currentDevice);
}