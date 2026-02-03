import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="w-full py-4 text-center text-sm text-gray-500 border-t">
      <p>© {new Date().getFullYear()} {t("rights")}</p>
      <p className="mt-1">{t("developedBy")}</p>
    </footer>
  );
}