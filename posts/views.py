from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from posts.models import Post
from .forms import PostForm


class IndexView(View):
    def get(self, request, *args, **kwargs):
        posts = Post.objects.all().all().order_by("-created_at")
        form = PostForm()
        return render(request, "posts/index.html", {"posts": posts, "form": form})

    def post(self, request, *args, **kwargs):
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save()
            return JsonResponse(
                {
                    "content": post.content,
                    "created_at": post.created_at.strftime("%Y-%m-%d %H:%M:%S"),
                }
            )
