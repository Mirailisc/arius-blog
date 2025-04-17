import { Button } from '@/components/ui/button'

export default function GoBackButton() {
  return (
    <Button variant="secondary" onClick={() => history.back()}>
      Go Back
    </Button>
  )
}
