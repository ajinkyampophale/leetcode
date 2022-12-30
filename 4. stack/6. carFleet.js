// https://leetcode.com/problems/car-fleet/

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
 const carFleet = (target, position, speed) => {
  
  // position => current position of car
  // speed => constant speed of car till it is included in car fleet and then Min(car_fleet, currentSpeed)
  // target => end line, cars can meet before or equal to target
  
  // combine postion and speed and sort be position so now last car is last position
  // loop in reverse and check if car reaches target before previous car if yes then they collide and will form a fleet

  
  const combined = position
                    .map((ele, idx) => [ele, speed[idx]])
                    .sort((a, b) => a[0] - b[0]);  // nlogn // n
  
  const stack = []; // n
  
  for(let i = combined.length - 1; i >= 0; i--){ // n
    
    const [currentPosition, currentSpeed] = combined[i];
    
    const current = (target - currentPosition) / currentSpeed;
    
    if(stack.length < 1 || stack[stack.length - 1] < current){
      stack.push(current);
    }
  }
  
  return stack.length;
};

// Time: O(n + nlog(n)) = O(nlog(n))
// Space: O(n + n) = O(n)