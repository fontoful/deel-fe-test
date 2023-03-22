interface AutoCompleteProps<T = {}> {
  id: string
  options: T[]
  value: string
  onValueChange: React.Dispatch<React.SetStateAction<string>> 
}

export default (props: AutoCompleteProps): JSX.Element => {
  const { id, value, onValueChange, options } = props

  const isShowOptions: boolean = (value.length > 0) && !!options

  const highlightMatch = (text: string, idx: number) => {
    const index = text.toLowerCase().indexOf(value.toLowerCase());

    if (index === -1) {
      return <h1 key={`${text}-${idx}`}>{text}</h1>;
    }

    const before = text.slice(0, index);
    const match = text.slice(index, index + value.length);
    const after = text.slice(index + value.length);
    return (
      <h1 key={`${text}-${idx}`}>
        {before}
        <span className="highlight">{match}</span>
        {after}
      </h1>
    );
  }

  return (
    <>
      <input
        id={id}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      {isShowOptions && (
        <div className='options-wrapper'>
          {options.map((opt, idx) => {
            if ('first_name' in opt) {
              return highlightMatch(opt.first_name as string, idx)
            }
          })}
        </div>
      )}
    </>
  )
};