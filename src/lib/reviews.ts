type Review = { review: string, source_url: string }
type VideoReview = { video_url: string }

// Отызвы об услуге по разработке ботов MAX
export const MAX_BOT_DEV_REVIEWS: Review[] = [
    { review: "(отзывов пока нет, будьте первыми.)", source_url: "#" }, // todo удалить когда появтся отзывы
]
export const MAX_BOT_DEV_REVIEWS_VIDEO: VideoReview[] = []


// Отзывы об услуге по созданию цифрового города будущего