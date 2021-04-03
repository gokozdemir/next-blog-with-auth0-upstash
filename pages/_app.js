import '../styles/global.css'
import Header from '../components/header'
import { Auth0Provider } from "@auth0/auth0-react"

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-oa6mzijr.us.auth0.com"
      clientId= {process.env.NEXT_PUBLIC_AUTH0_CLIENTID}//"ta0C9cZDCov9YRJiTu3LlLZF43Ea38JO"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-gray-700">
        <Header />
        <main className="mt-6 mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>

  )
}

export default MyApp