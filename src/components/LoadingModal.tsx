import { useState, useEffect } from 'react'
import Image from 'next/image'

interface LoadingModalProps {
  show: boolean
  onHide: () => void
  selectedAmount: number
  onComplete: () => void
}

export default function LoadingModal({ show, onHide, selectedAmount, onComplete }: LoadingModalProps) {
  const [phase, setPhase] = useState('loading') // 'loading' | 'counting' | 'complete'
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!show) {
      setPhase('loading')
      setCount(0)
      return
    }

    // Phase 1: Loading
    const loadingTimer = setTimeout(() => {
      setPhase('counting')
    }, 3500)

    return () => clearTimeout(loadingTimer)
  }, [show])

  useEffect(() => {
    if (phase === 'counting') {
      // Phase 2: Count up animation
      const duration = 7000
      const steps = 100
      const increment = selectedAmount / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const countInterval = setInterval(() => {
        currentStep++
        setCount(Math.floor(increment * currentStep))
        
        if (currentStep >= steps) {
          clearInterval(countInterval)
          setCount(selectedAmount)
          setPhase('complete')
          
          // Phase 3: Complete
          setTimeout(() => {
            onComplete()
          }, 2000)
        }
      }, stepDuration)

      return () => clearInterval(countInterval)
    }
  }, [phase, selectedAmount, onComplete])

  if (!show) return null

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <div className="loading">
              {phase === 'loading' && (
                <div className="loader-count">
                  <div className="lds-ring">
                    <div></div><div></div><div></div><div></div>
                  </div>
                  <div className="load_text">
                    Loading<span className="blink">...</span>
                  </div>
                  <p>Loading user stats</p>
                </div>
              )}
              
              {(phase === 'counting' || phase === 'complete') && (
                <ul className="package-count" style={{ display: 'block' }}>
                  <li className="mobile-package">
                    <div className={`packet_list_price count-js-title ${phase === 'complete' ? '' : ''}`}>
                      {phase === 'complete' ? 'SWEET!' : 'Free'}
                    </div>
                    <Image 
                      className="mobile-package-img" 
                      src="/img/box3.png" 
                      alt="packet" 
                      width={150}
                      height={150}
                    />
                    <div className="packet_list_coins">
                      <span 
                        id="count21" 
                        className={`valueCount-js ${phase === 'complete' ? 'color-green' : ''}`}
                      >
                        {count.toLocaleString()}
                      </span>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}