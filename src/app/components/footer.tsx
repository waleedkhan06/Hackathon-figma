import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 md:px-16 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-[292px]">
            <Link href="/" className="text-[32px] font-bold text-[#3563E9]">
              MORENT
            </Link>
            <p className="mt-4 text-[16px] text-[#13131399]">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-6">About</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[16px] text-[#13131399]">How it works</Link></li>
              <li><Link href="#" className="text-[16px] text-[#13131399]">Featured</Link></li>
              <li><Link href="#" className="text-[16px] text-[#13131399]">Partnership</Link></li>
              <li><Link href="#" className="text-[16px] text-[#13131399]">Business Relation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-6">Community</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[16px] text-[#13131399]">Events</Link></li>
              <li><Link href="#" className="text-[16px] text-[#13131399]">Blog</Link></li>
              <li><Link href="#" className="text-[16px] text-[#13131399]">Podcast</Link></li>
              <li><Link href="#" className="text-[16px] text-[#13131399]">Invite a friend</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-6">Socials</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[16px] text-[#13131399]">Discord</Link></li>
              <li><Link href="#" className="text-[16px] text-[#13131399]">Instagram</Link></li>
              <li><Link href="#" className="text-[16px] text-[#13131399]">Twitter</Link></li>
              <li><Link href="#" className="text-[16px] text-[#13131399]">Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#13131312] flex flex-col sm:flex-row items-center justify-between">
          <p className="text-[16px] text-[#13131399]">©2022 MORENT. All rights reserved</p>
          <div className="flex gap-16 mt-4 sm:mt-0">
            <Link href="#" className="text-[16px] text-[#13131399]">Privacy & Policy</Link>
            <Link href="#" className="text-[16px] text-[#13131399]">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

