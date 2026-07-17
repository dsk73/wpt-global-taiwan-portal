type Props = {
  locale: string;
};

export default async function Hero({ locale }: Props) {
  return (
    <section className="flex h-screen items-center justify-center bg-black">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">WPT Global Taiwan</h1>

        <p className="mt-4">Locale: {locale}</p>
      </div>
    </section>
  );
}
