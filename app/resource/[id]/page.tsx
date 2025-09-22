import { ResourceDetailPage } from "@/components/resource-detail-page"

export default function ResourceDetail({ params }: { params: { id: string } }) {
  return <ResourceDetailPage resourceId={params.id} />
}
