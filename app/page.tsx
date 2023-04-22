'use client'

import exp from "constants"
import { useState } from "react"
import { Riemann } from "riemann-sum-calculator"

export default function Home() {
  const [expression, setExpression] = useState<string>('')
  const [lowerBound, setLowerBound] = useState<string>('')
  const [upperBound, setUpperBound] = useState<string>('')

  const [answerDiv, setAnswerDiv] = useState<boolean>(false)

  const [answer, setAnswer] = useState<number>(0)

  const problem = {
    expression: expression,
    subintervals: 10000,
    lowerBound: parseInt(lowerBound),
    upperBound: parseInt(upperBound)
  }

  const getIntegral = () => {
    if (expression == '' || lowerBound == '' || upperBound == '') {
      alert("Please input values")
    } else {
      try {
        setAnswer(Riemann.midpointSum(problem))
        setAnswerDiv(true)
      } catch (error) {
        alert(error)
      }
    }
  }

  return (
    <div className="p-10 md:p-24 w-full flex flex-col space-y-8 items-center">
      <h1 className="text-2xl md:text-3xl font-bold">Simple Integral Calculator</h1>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-5 md:space-y-0 md:items-center">
        <div className="flex space-x-2 items-center text-lg">
          <p>f(x) =</p>
          <input
            className="border border-black rounded-sm p-1.5 px-2 placeholder:italic text-black"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Your function..."
          />
        </div>
        <input
            className="border border-black rounded-sm p-1.5 px-2 placeholder:italic text-black"
            value={lowerBound}
            onChange={(e) => setLowerBound(e.target.value)}
            placeholder="Lower bound..."
        />
        <input
            className="border border-black rounded-sm p-1.5 px-2 placeholder:italic text-black"
            value={upperBound}
            onChange={(e) => setUpperBound(e.target.value)}
            placeholder="Upper bound..."
        />
      </div>
      <button className="px-5 py-2 rounded-md bg-black hover:opacity-80 font-semibold" onClick={getIntegral}>
        <p>Go</p>
      </button>
      {
        answerDiv &&
        <div className="flex space-x-1 text-lg items-center bg-fuchsia-300/20 text-fuchsia-300 p-1 px-2">
          <p>Answer:</p>
          <p>{answer}</p>
        </div>
      }
      <div className="flex flex-col space-y-3 items-center max-w-3xl">
        <p className="text-xl font-bold">How it works?</p>
        <p>The integral calculator works by chaning the integral into a midpoint rule Riemann Sum and dividing it into 10,000 partitions. By using so many partitions we can ensure a very close approxiamtion coupled with the midpoint rule which is generally the most accurate approxiamtion.</p>
        <p>The actual calculations are performed by a npm package called <span className="font-mono p-1 bg-black rounded-md">riemann-sum-calculator</span>. This package provides a utility class with methods to calculate the right, left, midpoint, and trapezoid sums. Learn more about this package <a href="https://www.npmjs.com/package/riemann-sum-calculator" className="text-fuchsia-300 bg-fuchsia-300/20 hover:underline p-1">here</a>.</p>
      </div>
    </div>
  )
}
