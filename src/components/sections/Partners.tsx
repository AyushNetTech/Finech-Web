import Image from "next/image";

export default function Partners() {
  return (
    <div className="mt-20">
      <p className="mb-6 text-xs uppercase tracking-widest text-white">
        Partners in Financial Success
      </p>

      <div className="flex flex-wrap items-center gap-12 opacity-80">
        
        <Image
          src="/brands/amazonLogo.svg"
          alt="Slack logo"
          width={90}
          height={24}
          className="invert"
        />

        <Image
          src="/brands/dropboxLogo.svg"
          alt="Amazon logo"
          width={110}
          height={24}
          className="invert"
        />

        <Image
          src="/brands/googleLogo.svg"
          alt="Dropbox logo"
          width={120}
          height={24}
          color="white"
          className="invert"
        />

        <Image
          src="/brands/slackLogo.svg"
          alt="Loom logo"
          width={90}
          height={24}
          className="invert"
        />

      </div>
    </div>
  );
}