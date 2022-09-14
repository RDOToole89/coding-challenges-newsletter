// Solution submitted by Anton van Zeef using Apex

public class Chunks { 

  public static List<Object>[] chunkedArray(Object[] inputArray, Integer chunkSize) { 
    system.debug('### inputArray = ' + inputArray + chunkSize = ' + chunkSize); 
    if(inputArray == null) return null; 
    if(inputArray.isEmpty()) return new List<Object[]>{}; 
    Integer totalElements = inputArray.size(); 
    List<Objectp> outputChunks = new List<Object[]>(); 
    Object[] chunk = new Object[]{}; // dummy initial initialisation to keep compiler happy 
    for(Integer i=0; i<totalElements; i++) { 
      if(Math.mod(i,chunkSize) == 0) { 
        chunk = new Object[]{}; 
        outputChunks.add(chunk); 
       } 
       chunk.add(inputArray.get(i)); 
  } 
  system.debug('### outputChunks = ' + outputChunks); 
  return outputChunks; 
  } 

}