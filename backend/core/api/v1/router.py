from fastapi import APIRouter

from .content import router as content_router

router = APIRouter(prefix="/v1")

router.include_router(content_router)