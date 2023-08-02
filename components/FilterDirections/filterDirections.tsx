import * as Location from "expo-location";
import React, { useState } from "react";
import Autocomplete from "react-native-autocomplete-input";
import { useAppSelector } from "../../hooks/useStore";
import { Direction } from "../../store/directions/slice";
import FilterDirectionsItem from "../FilterDirectionsItem/FilterDirectionsItem";
import { StyledTextInput } from "../LocationHeader/LocationHeader.styles";
import { AutocompleteContainer } from "./filterDirections.styles";

type FilterDirectionsProps = {
  onSelectAddress: (coords: Location.LocationObjectCoords) => void;
};

const FilterLocations = ({ onSelectAddress }: FilterDirectionsProps) => {
  const [query, setQuery] = useState("");

  const [filteredDirections, setFilteredDirections] = useState<Direction[]>([]);

  const directions = useAppSelector((state) => state?.directions.directions);

  const filterDirections = (text: string) => {
    setQuery(text);

    if (!text) {
      setFilteredDirections([]);

      return [];
    }

    const results = directions.filter((d) =>
      d.place?.toLowerCase()?.includes(text?.toLocaleLowerCase())
    );

    setFilteredDirections(results);
  };

  return (
    <AutocompleteContainer>
      <Autocomplete
        data={filteredDirections}
        value={query}
        renderTextInput={() => (
          <StyledTextInput onChangeText={filterDirections} />
        )}
        inputContainerStyle={{ borderWidth: 0}}
        flatListProps={{
          keyExtractor: (_, idx) => idx,
          renderItem: ({ item }) => (
            <FilterDirectionsItem
              title={item?.place}
              onPress={() =>
                onSelectAddress(item?.coords as Location.LocationObjectCoords)
              }
            />
          ),
          style: {
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 10,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          },
        }}
      />
    </AutocompleteContainer>
  );
};

export default FilterLocations;
