import FunctionalComponentUI from "./FunctionalComponent.presenter";

export default function FunctionalComponentContainer() {
  return (
    //   return <FunctionalComponentUI count={123} school="다람쥐 초등학교" />;
    <>{FunctionalComponentUI({ count: 123, school: "다람쥐 초등학교" })}</>
  );
}
