/* eslint-disable max-lines-per-function */
import React from 'react'
import { Label } from '../Label'
import { Button } from '../Button'
import { CounterProps } from './Counter.props'
import styles from './Counter.styles'

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(({
  ariaLabelDecrementButton,
  ariaLabelIncrementButton,
  className = '',
  disabled,
  label,
  maxValue = 99,
  minValue = 0,
  onDecrement,
  onIncrement,
  size = 'semiX',
  testID,
  value = 0
}, ref) => {
  const {
    buttonGroup, inputBase, buttonLeft, buttonRight, labelText
  } = styles({ size })

  const maxReached = value >= maxValue
  const minReached = value <= minValue

  return (
    <div data-testid={testID} ref={ref} className={className}>
      {label && <Label className={labelText} label={label} />}
      <div className={buttonGroup}>
        <Button
          ariaLabel={ariaLabelDecrementButton}
          className={buttonLeft}
          disabled={disabled || minReached}
          onClick={onDecrement}
          size={size}
          testID="onDecrement-btn"
          variant="text"
        >
          -
        </Button>
        <input
          className={inputBase}
          readOnly
          value={value}
        />
        <Button
          ariaLabel={ariaLabelIncrementButton}
          className={buttonRight}
          disabled={disabled || maxReached}
          onClick={onIncrement}
          size={size}
          testID="onIncrement-btn"
          variant="text"
        >
          +
        </Button>
      </div>
    </div>
  )
})

export default Counter
