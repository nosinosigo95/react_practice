export default function EventBasic({type}){
  const current = () => {
    const d = new Date();
    if(type === 'time') console.log(d.toLocaleTimeString());
  }
  return (
    <>
      <button onClick={current}>現在の時刻</button>
    </>
  );
}
