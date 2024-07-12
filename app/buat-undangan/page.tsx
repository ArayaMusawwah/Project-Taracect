import Main from '@/components/CreateInvitation/Main'

const InvitationPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gray-700 px-2 py-8">
      <h1 className="mb-10 text-center text-3xl font-bold text-white">
        Buat & Sebarkan Undanganmu.
      </h1>
      <Main />
    </div>
  )
}
export default InvitationPage
