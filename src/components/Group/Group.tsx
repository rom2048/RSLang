const GroupButton = ({ group, setGroup }: { group: number; setGroup: (arg: number) => void }) => {
  return <button onClick={() => setGroup(group)}>{group}</button>
}

export default GroupButton
