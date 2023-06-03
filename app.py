import sys
import cv2

imageLocation = sys.argv[1]

img = cv2.imread(imageLocation,1)
 
# show image
print("value")
cv2.imshow('image',img)
cv2.waitKey(0)
cv2.destroyAllWindows()