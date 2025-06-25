import RecentActivity from './RecentActivity'
import Generator from './Generator'
import DailyItems from './DailyItems'
import VerificationTab from './VerificationTab'

interface TabContentProps {
  activeTab: string
  username: string
  setUsername: (value: string) => void
  selectedPlatform: string
  setSelectedPlatform: (value: string) => void
  selectedAmount: number
  showVerification: boolean
  showRightPanel: boolean
  setShowRightPanel: (value: boolean) => void
  setShowPackagesModal: (value: boolean) => void
  setShowLoadingModal: (value: boolean) => void
}

export default function TabContent({
  activeTab,
  username,
  setUsername,
  selectedPlatform,
  setSelectedPlatform,
  selectedAmount,
  showVerification,
  showRightPanel,
  setShowRightPanel,
  setShowPackagesModal,
  setShowLoadingModal
}: TabContentProps) {
  return (
    <div className="tab-content">
      {activeTab === 'home' && <RecentActivity />}
      
      {activeTab === 'menu1' && (
        <>
          {showVerification ? (
            <VerificationTab username={username} />
          ) : (
            <Generator
              username={username}
              setUsername={setUsername}
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={setSelectedPlatform}
              selectedAmount={selectedAmount}
              showRightPanel={showRightPanel}
              setShowRightPanel={setShowRightPanel}
              setShowPackagesModal={setShowPackagesModal}
              setShowLoadingModal={setShowLoadingModal}
            />
          )}
        </>
      )}
      
      {activeTab === 'menu2' && <DailyItems />}
    </div>
  )
}