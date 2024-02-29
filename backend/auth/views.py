from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json


@require_http_methods(["POST", "OPTIONS"])
@csrf_exempt  # Use csrf_exempt for simplicity; consider using CSRF protection in production
def login(request):
    if request.method == "POST":
        # Parse the JSON data from the request body
        data = json.loads(request.body.decode("utf-8"))

        # Retrieve username and password from the JSON data
        username = data.get("username")
        password = data.get("password")

        # Perform authentication logic here (e.g., check credentials against database)
        # Replace the following logic with your actual authentication logic
        if username == "admin" and password == "123":
            return JsonResponse({"success": True})
        else:
            return JsonResponse({"success": False})
    return JsonResponse({"error": "Invalid request method"})


@require_http_methods(["POST", "OPTIONS"])
@csrf_exempt
def signup():
    pass
