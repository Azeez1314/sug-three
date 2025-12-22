"use client"

export function SiteFooter() {
  return (  
   <footer className="bg-black text-gray-300 border-t border-gray-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} Sheffield Usrah. Powered and secured by <a
              href="https://nanocrafts.xyz"
              className="tracking-tight text-white underline"
            >
              Nanocrafts
          </a>
   </footer>
  )
}
