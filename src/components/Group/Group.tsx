import { selectCurrentUser } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setGroup } from '../../features/words/wordsSlice'
import styles from './Group.module.css'

export type Level = {
  number: number
  text: string
  color: string
}

const Group = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)
  const groupArray: Level[] = [
    { number: 1, text: 'A1', color: '#9DFF76' },
    { number: 2, text: 'A2', color: '#FFF86F' },
    { number: 3, text: 'B1', color: '#C5CCFF' },
    { number: 4, text: 'B2', color: '#FFBE3E' },
    { number: 5, text: 'C1', color: '#F17D8A' },
    { number: 6, text: 'C2', color: '#C097FF' },
    { number: 7, text: 'Difficult words', color: '#FF2700' },
  ]

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Выберите уровень</h3>
      <div className={styles.levelBox}>
        <div className={styles.levelBoxWrapper}>
          {user
            ? groupArray.map((level: Level) => (
                <GroupButton
                  key={level.number}
                  group={level}
                  cb={() => dispatch(setGroup(level.number - 1))}
                />
              ))
            : groupArray
                .slice(0, 6)
                .map((level: Level) => (
                  <GroupButton
                    key={level.number}
                    group={level}
                    cb={() => dispatch(setGroup(level.number - 1))}
                  />
                ))}
        </div>
      </div>
    </div>
  )
}

export default Group

const GroupButton = ({ group, cb }: { group: Level; cb: (arg: number) => void }) => {
  return (
    <button
      className={styles.level}
      style={{ background: group.color }}
      onClick={() => cb(group.number)}
    >
      {group.text}
    </button>
  )
}

// export default GroupButton
