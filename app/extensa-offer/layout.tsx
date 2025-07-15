import OfferNavbar from '../components/OfferNavbar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OfferNavbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        {children}
      </div>
    </>
  )
}
