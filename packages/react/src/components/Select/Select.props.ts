export interface OptionProps {
  value: string
  label: string
}

export interface SelectProps {
  /**
   * Specify an optional className to be added to your Select
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string

  label: string

  name: string

  options: OptionProps[]

  size?: 'medium' | 'mediumX'

  value: string

  onChange: React.ChangeEventHandler<HTMLSelectElement>,
}
