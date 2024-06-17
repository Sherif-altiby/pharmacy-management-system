from transformers import TrOCRProcessor, VisionEncoderDecoderModel
from PIL import Image
import requests

# Load image from the IAM database
url = 'Back_end\AI\image.png'
image = Image.open(url).convert("RGB")

# Load pre-trained processor and model
processor = TrOCRProcessor.from_pretrained('microsoft/trocr-base-handwritten')
model = VisionEncoderDecoderModel.from_pretrained('microsoft/trocr-base-handwritten')

# Process image to get pixel values
pixel_values = processor(images=image, return_tensors="pt").pixel_values

# Generate text from image
generated_ids = model.generate(pixel_values)

# Decode generated text
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]

print(generated_text)
