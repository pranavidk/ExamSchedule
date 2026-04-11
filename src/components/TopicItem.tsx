import { memo } from 'react'
import { CheckBox } from './ui/checkbox'

interface Props {
  topicId: string
  name: string
  completed: boolean
  accentColor: string
  onToggle: (id: string) => void
}

const TopicItem = memo(function TopicItem({ topicId, name, completed, accentColor, onToggle }: Props) {
  return (
    <li
      className="flex items-center gap-3 py-2 px-1 rounded-xl cursor-pointer group transition-colors hover:bg-black/[0.03]"
      onClick={() => onToggle(topicId)}
    >
      {/* stopPropagation prevents the CheckBox's internal div onClick from
          bubbling to the li and firing onToggle a second time. */}
      <span onClick={(e) => e.stopPropagation()}>
        <CheckBox
          checked={completed}
          onClick={() => onToggle(topicId)}
          size={22}
          color={accentColor}
          duration={0.2}
        />
      </span>
      <span
        className={`text-[13.5px] leading-snug transition-all duration-300 select-none ${
          completed
            ? 'text-gray-400 line-through decoration-gray-300'
            : 'text-gray-700 group-hover:text-gray-900'
        }`}
      >
        {name}
      </span>
    </li>
  )
})

export default TopicItem
