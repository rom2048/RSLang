import { selectCurrentUser } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectGroup, setGroup, selectGroupColors } from '../../features/words/wordsSlice'
import styles from './Group.module.css'

export type Level = {
  number: number
  text: string
}

const Group = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)
  const groupArray: Level[] = [
    { number: 1, text: 'A1' },
    { number: 2, text: 'A2' },
    { number: 3, text: 'B1' },
    { number: 4, text: 'B2' },
    { number: 5, text: 'C1' },
    { number: 6, text: 'C2' },
    { number: 7, text: 'Difficult words' },
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
  const currentGroup = useAppSelector(selectGroup)
  const colors = useAppSelector(selectGroupColors)
  return (
    <button
      className={
        currentGroup + 1 === group.number ? styles.level + ' ' + styles.active : styles.level
      }
      style={{ background: colors[group.number - 1] }}
      onClick={() => cb(group.number)}
    >
      {group.text}
    </button>
  )
}

// export default GroupButton
