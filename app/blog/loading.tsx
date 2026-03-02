export default function BlogLoading() {
  return (
    <div className="min-h-screen">

      {/* Hero skeleton */}
      <section className="py-20 sm:py-28 md:py-36 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="text-center animate-pulse">
            <div className="h-3 bg-muted w-48 mx-auto mb-4 rounded" />
            <div className="h-14 bg-muted w-28 mx-auto mb-6 rounded" />
            <div className="h-4 bg-muted max-w-sm mx-auto mb-2 rounded" />
            <div className="h-4 bg-muted max-w-xs mx-auto mb-8 rounded" />
            <div className="h-3 bg-muted w-36 mx-auto rounded" />
          </div>
        </div>
      </section>

      {/* Posts skeleton */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[680px] mx-auto px-4 sm:px-8 space-y-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse border-b border-border pb-16">
              {/* Date */}
              <div className="h-3 bg-muted w-32 mb-5 rounded" />
              {/* Media */}
              <div className="aspect-[3/4] bg-muted mb-6 rounded" />
              {/* Text lines */}
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-muted rounded" />
                <div className="h-4 bg-muted w-11/12 rounded" />
                <div className="h-4 bg-muted w-4/5 rounded" />
                <div className="h-4 bg-muted w-3/5 rounded" />
              </div>
              {/* Link */}
              <div className="h-3 bg-muted w-44 rounded" />
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
