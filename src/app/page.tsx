import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <h1 className="text-3xl text-white">Click here</h1>
      <AddCompanyButton />
    </main>
  );
}
