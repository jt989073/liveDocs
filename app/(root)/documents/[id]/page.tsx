import { Editor } from "@/components/editor/Editor"
import Header from "@/components/Header"
import { SignInButton, SignedOut, SignedIn } from "@clerk/nextjs"

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
        <p className="document-title">Fake title</p>
        </div>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn />
      </Header>
      <Editor />
    </div>
  )
}

export default Document