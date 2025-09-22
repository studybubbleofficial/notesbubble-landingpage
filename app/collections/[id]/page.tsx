import { CollectionDetailPage } from "@/components/collection-detail-page"

export default function CollectionDetail({ params }: { params: { id: string } }) {
  return <CollectionDetailPage collectionId={params.id} />
}
